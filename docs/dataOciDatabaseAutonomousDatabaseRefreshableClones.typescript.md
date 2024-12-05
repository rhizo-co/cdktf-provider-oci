# `dataOciDatabaseAutonomousDatabaseRefreshableClones` Submodule <a name="`dataOciDatabaseAutonomousDatabaseRefreshableClones` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClones <a name="DataOciDatabaseAutonomousDatabaseRefreshableClones" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones oci_database_autonomous_database_refreshable_clones}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig">DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig">DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRefreshableClones resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRefreshableClones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseRefreshableClones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseRefreshableClones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseRefreshableClones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.refreshableCloneCollection">refreshableCloneCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList</a>

---

##### `refreshableCloneCollection`<sup>Required</sup> <a name="refreshableCloneCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.refreshableCloneCollection"></a>

```typescript
public readonly refreshableCloneCollection: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseRefreshableClonesConfig: dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#filter DataOciDatabaseAutonomousDatabaseRefreshableClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseRefreshableClonesFilter: dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#name DataOciDatabaseAutonomousDatabaseRefreshableClones#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#values DataOciDatabaseAutonomousDatabaseRefreshableClones#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#regex DataOciDatabaseAutonomousDatabaseRefreshableClones#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#name DataOciDatabaseAutonomousDatabaseRefreshableClones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#values DataOciDatabaseAutonomousDatabaseRefreshableClones#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#regex DataOciDatabaseAutonomousDatabaseRefreshableClones#regex}.

---

### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection: dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection = { ... }
```


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems: dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>[]

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems</a>

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseRefreshableClones } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection</a>

---



