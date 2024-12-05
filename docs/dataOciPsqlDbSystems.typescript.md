# `dataOciPsqlDbSystems` Submodule <a name="`dataOciPsqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystems <a name="DataOciPsqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems oci_psql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystems(scope: Construct, id: string, config?: DataOciPsqlDbSystemsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig">DataOciPsqlDbSystemsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig">DataOciPsqlDbSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciPsqlDbSystemsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciPsqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciPsqlDbSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciPsqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection">dbSystemCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbSystemCollection`<sup>Required</sup> <a name="dbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.dbSystemCollection"></a>

```typescript
public readonly dbSystemCollection: DataOciPsqlDbSystemsDbSystemCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList">DataOciPsqlDbSystemsDbSystemCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filter"></a>

```typescript
public readonly filter: DataOciPsqlDbSystemsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList">DataOciPsqlDbSystemsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciPsqlDbSystemsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystems.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemsConfig <a name="DataOciPsqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsConfig: dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#compartment_id DataOciPsqlDbSystems#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#display_name DataOciPsqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciPsqlDbSystemsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#filter DataOciPsqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#id DataOciPsqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#state DataOciPsqlDbSystems#state}.

---

### DataOciPsqlDbSystemsDbSystemCollection <a name="DataOciPsqlDbSystemsDbSystemCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollection: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItems <a name="DataOciPsqlDbSystemsDbSystemCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItems: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsCredentials: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstances <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsInstances: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsSource <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsSource: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource = { ... }
```


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails: dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails = { ... }
```


### DataOciPsqlDbSystemsFilter <a name="DataOciPsqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDbSystemsFilter: dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#name DataOciPsqlDbSystems#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#values DataOciPsqlDbSystems#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_systems#regex DataOciPsqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails">passwordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordDetails`<sup>Required</sup> <a name="passwordDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.passwordDetails"></a>

```typescript
public readonly passwordDetails: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentials</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType">passwordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```typescript
public readonly passwordType: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsPasswordDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstances">DataOciPsqlDbSystemsDbSystemCollectionItemsInstances</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart">backupStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">daysOfTheMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupStart`<sup>Required</sup> <a name="backupStart" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```typescript
public readonly backupStart: string;
```

- *Type:* string

---

##### `daysOfTheMonth`<sup>Required</sup> <a name="daysOfTheMonth" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```typescript
public readonly daysOfTheMonth: number[];
```

- *Type:* number[]

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```typescript
public readonly daysOfTheWeek: string[];
```

- *Type:* string[]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyBackupPolicyList</a>

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicy</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">primaryDbEndpointPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `primaryDbEndpointPrivateIp`<sup>Required</sup> <a name="primaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```typescript
public readonly primaryDbEndpointPrivateIp: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig">applyConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances">instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails">instancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType">systemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `applyConfig`<sup>Required</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.applyConfig"></a>

```typescript
public readonly applyConfig: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.credentials"></a>

```typescript
public readonly credentials: DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList">DataOciPsqlDbSystemsDbSystemCollectionItemsCredentialsList</a>

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```typescript
public readonly instanceMemorySizeInGbs: number;
```

- *Type:* number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```typescript
public readonly instanceOcpuCount: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instances"></a>

```typescript
public readonly instances: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesList</a>

---

##### `instancesDetails`<sup>Required</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.instancesDetails"></a>

```typescript
public readonly instancesDetails: DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsInstancesDetailsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementPolicy`<sup>Required</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.managementPolicy"></a>

```typescript
public readonly managementPolicy: DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList">DataOciPsqlDbSystemsDbSystemCollectionItemsManagementPolicyList</a>

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.networkDetails"></a>

```typescript
public readonly networkDetails: DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsNetworkDetailsList</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.patchOperations"></a>

```typescript
public readonly patchOperations: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList</a>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.source"></a>

```typescript
public readonly source: DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList">DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.storageDetails"></a>

```typescript
public readonly storageDetails: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItems">DataOciPsqlDbSystemsDbSystemCollectionItems</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations">DataOciPsqlDbSystemsDbSystemCollectionItemsPatchOperations</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides">isHavingRestoreConfigOverrides</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `isHavingRestoreConfigOverrides`<sup>Required</sup> <a name="isHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```typescript
public readonly isHavingRestoreConfigOverrides: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsSource">DataOciPsqlDbSystemsDbSystemCollectionItemsSource</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops">iops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable">isRegionallyDurable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType">systemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.iops"></a>

```typescript
public readonly iops: string;
```

- *Type:* string

---

##### `isRegionallyDurable`<sup>Required</sup> <a name="isRegionallyDurable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```typescript
public readonly isRegionallyDurable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails">DataOciPsqlDbSystemsDbSystemCollectionItemsStorageDetails</a>

---


### DataOciPsqlDbSystemsDbSystemCollectionList <a name="DataOciPsqlDbSystemsDbSystemCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsDbSystemCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDbSystemsDbSystemCollectionOutputReference <a name="DataOciPsqlDbSystemsDbSystemCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciPsqlDbSystemsDbSystemCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionItemsList">DataOciPsqlDbSystemsDbSystemCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDbSystemsDbSystemCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsDbSystemCollection">DataOciPsqlDbSystemsDbSystemCollection</a>

---


### DataOciPsqlDbSystemsFilterList <a name="DataOciPsqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get"></a>

```typescript
public get(index: number): DataOciPsqlDbSystemsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciPsqlDbSystemsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>[]

---


### DataOciPsqlDbSystemsFilterOutputReference <a name="DataOciPsqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciPsqlDbSystemsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystems.DataOciPsqlDbSystemsFilter">DataOciPsqlDbSystemsFilter</a>

---



