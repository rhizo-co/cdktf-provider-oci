# `dataOciFunctionsPbfListingVersions` Submodule <a name="`dataOciFunctionsPbfListingVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsPbfListingVersions <a name="DataOciFunctionsPbfListingVersions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions oci_functions_pbf_listing_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions(scope: Construct, id: string, config: DataOciFunctionsPbfListingVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig">DataOciFunctionsPbfListingVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig">DataOciFunctionsPbfListingVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion">resetIsCurrentVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId">resetPbfListingVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFunctionsPbfListingVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCurrentVersion` <a name="resetIsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion"></a>

```typescript
public resetIsCurrentVersion(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPbfListingVersionId` <a name="resetPbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId"></a>

```typescript
public resetPbfListingVersionId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFunctionsPbfListingVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFunctionsPbfListingVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsPbfListingVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection">pbfListingVersionsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput">isCurrentVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput">pbfListingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput">pbfListingVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion">isCurrentVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId">pbfListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId">pbfListingVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter"></a>

```typescript
public readonly filter: DataOciFunctionsPbfListingVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a>

---

##### `pbfListingVersionsCollection`<sup>Required</sup> <a name="pbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection"></a>

```typescript
public readonly pbfListingVersionsCollection: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFunctionsPbfListingVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCurrentVersionInput`<sup>Optional</sup> <a name="isCurrentVersionInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput"></a>

```typescript
public readonly isCurrentVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pbfListingIdInput`<sup>Optional</sup> <a name="pbfListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput"></a>

```typescript
public readonly pbfListingIdInput: string;
```

- *Type:* string

---

##### `pbfListingVersionIdInput`<sup>Optional</sup> <a name="pbfListingVersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput"></a>

```typescript
public readonly pbfListingVersionIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCurrentVersion`<sup>Required</sup> <a name="isCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion"></a>

```typescript
public readonly isCurrentVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId"></a>

```typescript
public readonly pbfListingId: string;
```

- *Type:* string

---

##### `pbfListingVersionId`<sup>Required</sup> <a name="pbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId"></a>

```typescript
public readonly pbfListingVersionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsPbfListingVersionsConfig <a name="DataOciFunctionsPbfListingVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsConfig: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId">pbfListingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion">isCurrentVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId">pbfListingVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId"></a>

```typescript
public readonly pbfListingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFunctionsPbfListingVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#filter DataOciFunctionsPbfListingVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCurrentVersion`<sup>Optional</sup> <a name="isCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion"></a>

```typescript
public readonly isCurrentVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `pbfListingVersionId`<sup>Optional</sup> <a name="pbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId"></a>

```typescript
public readonly pbfListingVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}.

---

### DataOciFunctionsPbfListingVersionsFilter <a name="DataOciFunctionsPbfListingVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsFilter: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}.

---

### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsPbfListingVersionsCollection: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection = { ... }
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems = { ... }
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig = { ... }
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements = { ... }
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies = { ... }
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers: dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsPbfListingVersionsFilterList <a name="DataOciFunctionsPbfListingVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFunctionsPbfListingVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>[]

---


### DataOciFunctionsPbfListingVersionsFilterOutputReference <a name="DataOciFunctionsPbfListingVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFunctionsPbfListingVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter">DataOciFunctionsPbfListingVersionsFilter</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional">isOptional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isOptional`<sup>Required</sup> <a name="isOptional" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional"></a>

```typescript
public readonly isOptional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary">changeSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId">pbfListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements">requirements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers">triggers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeSummary`<sup>Required</sup> <a name="changeSummary" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary"></a>

```typescript
public readonly changeSummary: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config"></a>

```typescript
public readonly config: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pbfListingId`<sup>Required</sup> <a name="pbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId"></a>

```typescript
public readonly pbfListingId: string;
```

- *Type:* string

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements"></a>

```typescript
public readonly requirements: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers"></a>

```typescript
public readonly triggers: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs">minMemoryRequiredInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minMemoryRequiredInMbs`<sup>Required</sup> <a name="minMemoryRequiredInMbs" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs"></a>

```typescript
public readonly minMemoryRequiredInMbs: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies"></a>

```typescript
public readonly policies: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get"></a>

```typescript
public get(index: number): DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFunctionsPbfListingVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a>

---



