# `dataOciDatabaseGiVersionMinorVersions` Submodule <a name="`dataOciDatabaseGiVersionMinorVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseGiVersionMinorVersions <a name="DataOciDatabaseGiVersionMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions oci_database_gi_version_minor_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions(scope: Construct, id: string, config: DataOciDatabaseGiVersionMinorVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig">DataOciDatabaseGiVersionMinorVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig">DataOciDatabaseGiVersionMinorVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetIsGiVersionForProvisioning">resetIsGiVersionForProvisioning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShapeFamily">resetShapeFamily</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseGiVersionMinorVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsGiVersionForProvisioning` <a name="resetIsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetIsGiVersionForProvisioning"></a>

```typescript
public resetIsGiVersionForProvisioning(): void
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShape"></a>

```typescript
public resetShape(): void
```

##### `resetShapeFamily` <a name="resetShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShapeFamily"></a>

```typescript
public resetShapeFamily(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseGiVersionMinorVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseGiVersionMinorVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseGiVersionMinorVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseGiVersionMinorVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseGiVersionMinorVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList">DataOciDatabaseGiVersionMinorVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.giMinorVersions">giMinorVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList">DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioningInput">isGiVersionForProvisioningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamilyInput">shapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioning">isGiVersionForProvisioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamily">shapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseGiVersionMinorVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList">DataOciDatabaseGiVersionMinorVersionsFilterList</a>

---

##### `giMinorVersions`<sup>Required</sup> <a name="giMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.giMinorVersions"></a>

```typescript
public readonly giMinorVersions: DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList">DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseGiVersionMinorVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isGiVersionForProvisioningInput`<sup>Optional</sup> <a name="isGiVersionForProvisioningInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioningInput"></a>

```typescript
public readonly isGiVersionForProvisioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapeFamilyInput`<sup>Optional</sup> <a name="shapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamilyInput"></a>

```typescript
public readonly shapeFamilyInput: string;
```

- *Type:* string

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isGiVersionForProvisioning`<sup>Required</sup> <a name="isGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioning"></a>

```typescript
public readonly isGiVersionForProvisioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `shapeFamily`<sup>Required</sup> <a name="shapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamily"></a>

```typescript
public readonly shapeFamily: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseGiVersionMinorVersionsConfig <a name="DataOciDatabaseGiVersionMinorVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseGiVersionMinorVersionsConfig: dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#version DataOciDatabaseGiVersionMinorVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#availability_domain DataOciDatabaseGiVersionMinorVersions#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#compartment_id DataOciDatabaseGiVersionMinorVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#id DataOciDatabaseGiVersionMinorVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.isGiVersionForProvisioning">isGiVersionForProvisioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#is_gi_version_for_provisioning DataOciDatabaseGiVersionMinorVersions#is_gi_version_for_provisioning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape DataOciDatabaseGiVersionMinorVersions#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shapeFamily">shapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape_family DataOciDatabaseGiVersionMinorVersions#shape_family}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#version DataOciDatabaseGiVersionMinorVersions#version}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#availability_domain DataOciDatabaseGiVersionMinorVersions#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#compartment_id DataOciDatabaseGiVersionMinorVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseGiVersionMinorVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#filter DataOciDatabaseGiVersionMinorVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#id DataOciDatabaseGiVersionMinorVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isGiVersionForProvisioning`<sup>Optional</sup> <a name="isGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.isGiVersionForProvisioning"></a>

```typescript
public readonly isGiVersionForProvisioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#is_gi_version_for_provisioning DataOciDatabaseGiVersionMinorVersions#is_gi_version_for_provisioning}.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape DataOciDatabaseGiVersionMinorVersions#shape}.

---

##### `shapeFamily`<sup>Optional</sup> <a name="shapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shapeFamily"></a>

```typescript
public readonly shapeFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape_family DataOciDatabaseGiVersionMinorVersions#shape_family}.

---

### DataOciDatabaseGiVersionMinorVersionsFilter <a name="DataOciDatabaseGiVersionMinorVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseGiVersionMinorVersionsFilter: dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#name DataOciDatabaseGiVersionMinorVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#values DataOciDatabaseGiVersionMinorVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#regex DataOciDatabaseGiVersionMinorVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#name DataOciDatabaseGiVersionMinorVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#values DataOciDatabaseGiVersionMinorVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#regex DataOciDatabaseGiVersionMinorVersions#regex}.

---

### DataOciDatabaseGiVersionMinorVersionsGiMinorVersions <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseGiVersionMinorVersionsGiMinorVersions: dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseGiVersionMinorVersionsFilterList <a name="DataOciDatabaseGiVersionMinorVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseGiVersionMinorVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseGiVersionMinorVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>[]

---


### DataOciDatabaseGiVersionMinorVersionsFilterOutputReference <a name="DataOciDatabaseGiVersionMinorVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseGiVersionMinorVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter">DataOciDatabaseGiVersionMinorVersionsFilter</a>

---


### DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseGiVersionMinorVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.gridImageId">gridImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions">DataOciDatabaseGiVersionMinorVersionsGiMinorVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.gridImageId"></a>

```typescript
public readonly gridImageId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseGiVersionMinorVersionsGiMinorVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions">DataOciDatabaseGiVersionMinorVersionsGiMinorVersions</a>

---



