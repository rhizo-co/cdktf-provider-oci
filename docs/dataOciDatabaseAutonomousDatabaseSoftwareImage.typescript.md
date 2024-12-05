# `dataOciDatabaseAutonomousDatabaseSoftwareImage` Submodule <a name="`dataOciDatabaseAutonomousDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImage <a name="DataOciDatabaseAutonomousDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image oci_database_autonomous_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseSoftwareImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig">DataOciDatabaseAutonomousDatabaseSoftwareImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig">DataOciDatabaseAutonomousDatabaseSoftwareImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseSoftwareImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDsiOneOffPatches">autonomousDsiOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.releaseUpdate">releaseUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbId">sourceCdbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageIdInput">autonomousDatabaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageId">autonomousDatabaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousDsiOneOffPatches`<sup>Required</sup> <a name="autonomousDsiOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDsiOneOffPatches"></a>

```typescript
public readonly autonomousDsiOneOffPatches: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `releaseUpdate`<sup>Required</sup> <a name="releaseUpdate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.releaseUpdate"></a>

```typescript
public readonly releaseUpdate: string;
```

- *Type:* string

---

##### `sourceCdbId`<sup>Required</sup> <a name="sourceCdbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbId"></a>

```typescript
public readonly sourceCdbId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `autonomousDatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="autonomousDatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageIdInput"></a>

```typescript
public readonly autonomousDatabaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseSoftwareImageId`<sup>Required</sup> <a name="autonomousDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageId"></a>

```typescript
public readonly autonomousDatabaseSoftwareImageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImageConfig <a name="DataOciDatabaseAutonomousDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseSoftwareImageConfig: dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.autonomousDatabaseSoftwareImageId">autonomousDatabaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image#autonomous_database_software_image_id DataOciDatabaseAutonomousDatabaseSoftwareImage#autonomous_database_software_image_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseSoftwareImageId`<sup>Required</sup> <a name="autonomousDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.autonomousDatabaseSoftwareImageId"></a>

```typescript
public readonly autonomousDatabaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image#autonomous_database_software_image_id DataOciDatabaseAutonomousDatabaseSoftwareImage#autonomous_database_software_image_id}.

---



