# `dataOciDatabaseExadataInfrastructures` Submodule <a name="`dataOciDatabaseExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadataInfrastructures <a name="DataOciDatabaseExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures oci_database_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures(scope: Construct, id: string, config: DataOciDatabaseExadataInfrastructuresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig">DataOciDatabaseExadataInfrastructuresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig">DataOciDatabaseExadataInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseExadataInfrastructuresFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isConstruct"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformElement"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseExadataInfrastructures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.exadataInfrastructures">exadataInfrastructures</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList">DataOciDatabaseExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `exadataInfrastructures`<sup>Required</sup> <a name="exadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.exadataInfrastructures"></a>

```typescript
public readonly exadataInfrastructures: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseExadataInfrastructuresFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList">DataOciDatabaseExadataInfrastructuresFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseExadataInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadataInfrastructuresConfig <a name="DataOciDatabaseExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresConfig: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#compartment_id DataOciDatabaseExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#display_name DataOciDatabaseExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#id DataOciDatabaseExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#state DataOciDatabaseExadataInfrastructures#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#compartment_id DataOciDatabaseExadataInfrastructures#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#display_name DataOciDatabaseExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseExadataInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#filter DataOciDatabaseExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#id DataOciDatabaseExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#state DataOciDatabaseExadataInfrastructures#state}.

---

### DataOciDatabaseExadataInfrastructuresExadataInfrastructures <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructures.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructures: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructures = { ... }
```


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts = { ... }
```


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations = { ... }
```


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow = { ... }
```


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek = { ... }
```


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths = { ... }
```


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails = { ... }
```


### DataOciDatabaseExadataInfrastructuresFilter <a name="DataOciDatabaseExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseExadataInfrastructuresFilter: dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#name DataOciDatabaseExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#values DataOciDatabaseExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#regex DataOciDatabaseExadataInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#name DataOciDatabaseExadataInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#values DataOciDatabaseExadataInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadata_infrastructures#regex DataOciDatabaseExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.isContactMosValidated">isContactMosValidated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.isPrimary">isPrimary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `isContactMosValidated`<sup>Required</sup> <a name="isContactMosValidated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.isContactMosValidated"></a>

```typescript
public readonly isContactMosValidated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContacts</a>

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">isBackupPartition</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isResizable">isResizable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">minSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isBackupPartition`<sup>Required</sup> <a name="isBackupPartition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```typescript
public readonly isBackupPartition: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isResizable`<sup>Required</sup> <a name="isResizable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```typescript
public readonly isResizable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minSizeGb`<sup>Required</sup> <a name="minSizeGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```typescript
public readonly minSizeGb: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurations</a>

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonths</a>

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```typescript
public readonly isMonthlyPatchingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu"></a>

```typescript
public readonly skipRu: BooleanList;
```

- *Type:* cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindow</a>

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode">backupNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode">clientNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode">drNetworkBondingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupNetworkBondingMode`<sup>Required</sup> <a name="backupNetworkBondingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.backupNetworkBondingMode"></a>

```typescript
public readonly backupNetworkBondingMode: string;
```

- *Type:* string

---

##### `clientNetworkBondingMode`<sup>Required</sup> <a name="clientNetworkBondingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.clientNetworkBondingMode"></a>

```typescript
public readonly clientNetworkBondingMode: string;
```

- *Type:* string

---

##### `drNetworkBondingMode`<sup>Required</sup> <a name="drNetworkBondingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.drNetworkBondingMode"></a>

```typescript
public readonly drNetworkBondingMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetails</a>

---


### DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference <a name="DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.activatedStorageCount">activatedStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.activationFile">activationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.additionalComputeCount">additionalComputeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.additionalComputeSystemModel">additionalComputeSystemModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.adminNetworkCidr">adminNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.cloudControlPlaneServer1">cloudControlPlaneServer1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.cloudControlPlaneServer2">cloudControlPlaneServer2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.contacts">contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.corporateProxy">corporateProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.cpusEnabled">cpusEnabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.createAsync">createAsync</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.csiNumber">csiNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dbServerVersion">dbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.definedFileSystemConfigurations">definedFileSystemConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.infiniBandNetworkCidr">infiniBandNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.isCpsOfflineReportEnabled">isCpsOfflineReportEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.isMultiRackDeployment">isMultiRackDeployment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maintenanceSloStatus">maintenanceSloStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxDataStorageInTbs">maxDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.multiRackConfigurationFile">multiRackConfigurationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.networkBondingModeDetails">networkBondingModeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.ntpServer">ntpServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.rackSerialNumber">rackSerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.storageServerVersion">storageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructures">DataOciDatabaseExadataInfrastructuresExadataInfrastructures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.activatedStorageCount"></a>

```typescript
public readonly activatedStorageCount: number;
```

- *Type:* number

---

##### `activationFile`<sup>Required</sup> <a name="activationFile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.activationFile"></a>

```typescript
public readonly activationFile: string;
```

- *Type:* string

---

##### `additionalComputeCount`<sup>Required</sup> <a name="additionalComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.additionalComputeCount"></a>

```typescript
public readonly additionalComputeCount: number;
```

- *Type:* number

---

##### `additionalComputeSystemModel`<sup>Required</sup> <a name="additionalComputeSystemModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.additionalComputeSystemModel"></a>

```typescript
public readonly additionalComputeSystemModel: string;
```

- *Type:* string

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

---

##### `adminNetworkCidr`<sup>Required</sup> <a name="adminNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.adminNetworkCidr"></a>

```typescript
public readonly adminNetworkCidr: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `cloudControlPlaneServer1`<sup>Required</sup> <a name="cloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.cloudControlPlaneServer1"></a>

```typescript
public readonly cloudControlPlaneServer1: string;
```

- *Type:* string

---

##### `cloudControlPlaneServer2`<sup>Required</sup> <a name="cloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.cloudControlPlaneServer2"></a>

```typescript
public readonly cloudControlPlaneServer2: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.contacts"></a>

```typescript
public readonly contacts: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresContactsList</a>

---

##### `corporateProxy`<sup>Required</sup> <a name="corporateProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.corporateProxy"></a>

```typescript
public readonly corporateProxy: string;
```

- *Type:* string

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.cpusEnabled"></a>

```typescript
public readonly cpusEnabled: number;
```

- *Type:* number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.createAsync"></a>

```typescript
public readonly createAsync: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `csiNumber`<sup>Required</sup> <a name="csiNumber" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.csiNumber"></a>

```typescript
public readonly csiNumber: string;
```

- *Type:* string

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dbServerVersion"></a>

```typescript
public readonly dbServerVersion: string;
```

- *Type:* string

---

##### `definedFileSystemConfigurations`<sup>Required</sup> <a name="definedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.definedFileSystemConfigurations"></a>

```typescript
public readonly definedFileSystemConfigurations: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresDefinedFileSystemConfigurationsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infiniBandNetworkCidr`<sup>Required</sup> <a name="infiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.infiniBandNetworkCidr"></a>

```typescript
public readonly infiniBandNetworkCidr: string;
```

- *Type:* string

---

##### `isCpsOfflineReportEnabled`<sup>Required</sup> <a name="isCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.isCpsOfflineReportEnabled"></a>

```typescript
public readonly isCpsOfflineReportEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMultiRackDeployment`<sup>Required</sup> <a name="isMultiRackDeployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.isMultiRackDeployment"></a>

```typescript
public readonly isMultiRackDeployment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceSloStatus`<sup>Required</sup> <a name="maintenanceSloStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maintenanceSloStatus"></a>

```typescript
public readonly maintenanceSloStatus: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresMaintenanceWindowList</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDataStorageInTbs`<sup>Required</sup> <a name="maxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxDataStorageInTbs"></a>

```typescript
public readonly maxDataStorageInTbs: number;
```

- *Type:* number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxDbNodeStorageInGbs"></a>

```typescript
public readonly maxDbNodeStorageInGbs: number;
```

- *Type:* number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.maxMemoryInGbs"></a>

```typescript
public readonly maxMemoryInGbs: number;
```

- *Type:* number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.monthlyDbServerVersion"></a>

```typescript
public readonly monthlyDbServerVersion: string;
```

- *Type:* string

---

##### `multiRackConfigurationFile`<sup>Required</sup> <a name="multiRackConfigurationFile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.multiRackConfigurationFile"></a>

```typescript
public readonly multiRackConfigurationFile: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `networkBondingModeDetails`<sup>Required</sup> <a name="networkBondingModeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.networkBondingModeDetails"></a>

```typescript
public readonly networkBondingModeDetails: DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList">DataOciDatabaseExadataInfrastructuresExadataInfrastructuresNetworkBondingModeDetailsList</a>

---

##### `ntpServer`<sup>Required</sup> <a name="ntpServer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.ntpServer"></a>

```typescript
public readonly ntpServer: string[];
```

- *Type:* string[]

---

##### `rackSerialNumber`<sup>Required</sup> <a name="rackSerialNumber" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.rackSerialNumber"></a>

```typescript
public readonly rackSerialNumber: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.storageServerVersion"></a>

```typescript
public readonly storageServerVersion: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructuresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseExadataInfrastructuresExadataInfrastructures;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresExadataInfrastructures">DataOciDatabaseExadataInfrastructuresExadataInfrastructures</a>

---


### DataOciDatabaseExadataInfrastructuresFilterList <a name="DataOciDatabaseExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseExadataInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>[]

---


### DataOciDatabaseExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseExadataInfrastructuresFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadataInfrastructures.DataOciDatabaseExadataInfrastructuresFilter">DataOciDatabaseExadataInfrastructuresFilter</a>

---



