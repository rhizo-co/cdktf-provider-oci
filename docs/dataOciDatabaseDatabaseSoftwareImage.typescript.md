# `dataOciDatabaseDatabaseSoftwareImage` Submodule <a name="`dataOciDatabaseDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseSoftwareImage <a name="DataOciDatabaseDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image oci_database_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage(scope: Construct, id: string, config: DataOciDatabaseDatabaseSoftwareImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig">DataOciDatabaseDatabaseSoftwareImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig">DataOciDatabaseDatabaseSoftwareImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isConstruct"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDatabaseSoftwareImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches">databaseSoftwareImageIncludedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.includedPatchesSummary">includedPatchesSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.lsInventory">lsInventory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.patchSet">patchSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="databaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches"></a>

```typescript
public readonly databaseSoftwareImageIncludedPatches: string[];
```

- *Type:* string[]

---

##### `databaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches"></a>

```typescript
public readonly databaseSoftwareImageOneOffPatches: string[];
```

- *Type:* string[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `includedPatchesSummary`<sup>Required</sup> <a name="includedPatchesSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.includedPatchesSummary"></a>

```typescript
public readonly includedPatchesSummary: string;
```

- *Type:* string

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.isUpgradeSupported"></a>

```typescript
public readonly isUpgradeSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lsInventory`<sup>Required</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.lsInventory"></a>

```typescript
public readonly lsInventory: string;
```

- *Type:* string

---

##### `patchSet`<sup>Required</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.patchSet"></a>

```typescript
public readonly patchSet: string;
```

- *Type:* string

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.sourceDbHomeId"></a>

```typescript
public readonly sourceDbHomeId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIdInput"></a>

```typescript
public readonly databaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseSoftwareImageConfig <a name="DataOciDatabaseDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDatabaseSoftwareImageConfig: dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image#database_software_image_id DataOciDatabaseDatabaseSoftwareImage#database_software_image_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImage.DataOciDatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_image#database_software_image_id DataOciDatabaseDatabaseSoftwareImage#database_software_image_id}.

---



