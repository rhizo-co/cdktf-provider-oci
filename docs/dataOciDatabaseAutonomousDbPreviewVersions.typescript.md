# `dataOciDatabaseAutonomousDbPreviewVersions` Submodule <a name="`dataOciDatabaseAutonomousDbPreviewVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDbPreviewVersions <a name="DataOciDatabaseAutonomousDbPreviewVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions oci_database_autonomous_db_preview_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions(scope: Construct, id: string, config: DataOciDatabaseAutonomousDbPreviewVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig">DataOciDatabaseAutonomousDbPreviewVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig">DataOciDatabaseAutonomousDbPreviewVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousDbPreviewVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDbPreviewVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDbPreviewVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDbPreviewVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDbPreviewVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDbPreviewVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.autonomousDbPreviewVersions">autonomousDbPreviewVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList">DataOciDatabaseAutonomousDbPreviewVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousDbPreviewVersions`<sup>Required</sup> <a name="autonomousDbPreviewVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.autonomousDbPreviewVersions"></a>

```typescript
public readonly autonomousDbPreviewVersions: DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousDbPreviewVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList">DataOciDatabaseAutonomousDbPreviewVersionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousDbPreviewVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions <a name="DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions: dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions = { ... }
```


### DataOciDatabaseAutonomousDbPreviewVersionsConfig <a name="DataOciDatabaseAutonomousDbPreviewVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDbPreviewVersionsConfig: dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#compartment_id DataOciDatabaseAutonomousDbPreviewVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#id DataOciDatabaseAutonomousDbPreviewVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#compartment_id DataOciDatabaseAutonomousDbPreviewVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousDbPreviewVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#filter DataOciDatabaseAutonomousDbPreviewVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#id DataOciDatabaseAutonomousDbPreviewVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDbPreviewVersionsFilter <a name="DataOciDatabaseAutonomousDbPreviewVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDbPreviewVersionsFilter: dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#name DataOciDatabaseAutonomousDbPreviewVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#values DataOciDatabaseAutonomousDbPreviewVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#regex DataOciDatabaseAutonomousDbPreviewVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#name DataOciDatabaseAutonomousDbPreviewVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#values DataOciDatabaseAutonomousDbPreviewVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_db_preview_versions#regex DataOciDatabaseAutonomousDbPreviewVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList <a name="DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference <a name="DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewBegin">timePreviewBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewEnd">timePreviewEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `timePreviewBegin`<sup>Required</sup> <a name="timePreviewBegin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewBegin"></a>

```typescript
public readonly timePreviewBegin: string;
```

- *Type:* string

---

##### `timePreviewEnd`<sup>Required</sup> <a name="timePreviewEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.timePreviewEnd"></a>

```typescript
public readonly timePreviewEnd: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions">DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions</a>

---


### DataOciDatabaseAutonomousDbPreviewVersionsFilterList <a name="DataOciDatabaseAutonomousDbPreviewVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDbPreviewVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>[]

---


### DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference <a name="DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDbPreviewVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDbPreviewVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDbPreviewVersions.DataOciDatabaseAutonomousDbPreviewVersionsFilter">DataOciDatabaseAutonomousDbPreviewVersionsFilter</a>

---



