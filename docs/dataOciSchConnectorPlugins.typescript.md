# `dataOciSchConnectorPlugins` Submodule <a name="`dataOciSchConnectorPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchConnectorPlugins <a name="DataOciSchConnectorPlugins" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins oci_sch_connector_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPlugins(scope: Construct, id: string, config?: DataOciSchConnectorPluginsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig">DataOciSchConnectorPluginsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig">DataOciSchConnectorPluginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciSchConnectorPluginsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSchConnectorPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isConstruct"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformElement"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformDataSource"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciSchConnectorPlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSchConnectorPlugins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSchConnectorPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchConnectorPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.connectorPluginCollection">connectorPluginCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList">DataOciSchConnectorPluginsConnectorPluginCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList">DataOciSchConnectorPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectorPluginCollection`<sup>Required</sup> <a name="connectorPluginCollection" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.connectorPluginCollection"></a>

```typescript
public readonly connectorPluginCollection: DataOciSchConnectorPluginsConnectorPluginCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList">DataOciSchConnectorPluginsConnectorPluginCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.filter"></a>

```typescript
public readonly filter: DataOciSchConnectorPluginsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList">DataOciSchConnectorPluginsFilterList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciSchConnectorPluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPlugins.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchConnectorPluginsConfig <a name="DataOciSchConnectorPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciSchConnectorPluginsConfig: dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#display_name DataOciSchConnectorPlugins#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#id DataOciSchConnectorPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#name DataOciSchConnectorPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#state DataOciSchConnectorPlugins#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#display_name DataOciSchConnectorPlugins#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciSchConnectorPluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#filter DataOciSchConnectorPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#id DataOciSchConnectorPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#name DataOciSchConnectorPlugins#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#state DataOciSchConnectorPlugins#state}.

---

### DataOciSchConnectorPluginsConnectorPluginCollection <a name="DataOciSchConnectorPluginsConnectorPluginCollection" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollection.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciSchConnectorPluginsConnectorPluginCollection: dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollection = { ... }
```


### DataOciSchConnectorPluginsConnectorPluginCollectionItems <a name="DataOciSchConnectorPluginsConnectorPluginCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItems.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciSchConnectorPluginsConnectorPluginCollectionItems: dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItems = { ... }
```


### DataOciSchConnectorPluginsFilter <a name="DataOciSchConnectorPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

const dataOciSchConnectorPluginsFilter: dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#name DataOciSchConnectorPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#values DataOciSchConnectorPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#regex DataOciSchConnectorPlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#name DataOciSchConnectorPlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#values DataOciSchConnectorPlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_connector_plugins#regex DataOciSchConnectorPlugins#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciSchConnectorPluginsConnectorPluginCollectionItemsList <a name="DataOciSchConnectorPluginsConnectorPluginCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference <a name="DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.estimatedThroughput">estimatedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.maxRetention">maxRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItems">DataOciSchConnectorPluginsConnectorPluginCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedThroughput`<sup>Required</sup> <a name="estimatedThroughput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.estimatedThroughput"></a>

```typescript
public readonly estimatedThroughput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `maxRetention`<sup>Required</sup> <a name="maxRetention" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.maxRetention"></a>

```typescript
public readonly maxRetention: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchConnectorPluginsConnectorPluginCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItems">DataOciSchConnectorPluginsConnectorPluginCollectionItems</a>

---


### DataOciSchConnectorPluginsConnectorPluginCollectionList <a name="DataOciSchConnectorPluginsConnectorPluginCollectionList" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.get"></a>

```typescript
public get(index: number): DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference <a name="DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList">DataOciSchConnectorPluginsConnectorPluginCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollection">DataOciSchConnectorPluginsConnectorPluginCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciSchConnectorPluginsConnectorPluginCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionItemsList">DataOciSchConnectorPluginsConnectorPluginCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchConnectorPluginsConnectorPluginCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsConnectorPluginCollection">DataOciSchConnectorPluginsConnectorPluginCollection</a>

---


### DataOciSchConnectorPluginsFilterList <a name="DataOciSchConnectorPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.get"></a>

```typescript
public get(index: number): DataOciSchConnectorPluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSchConnectorPluginsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>[]

---


### DataOciSchConnectorPluginsFilterOutputReference <a name="DataOciSchConnectorPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciSchConnectorPlugins } from 'rhizo-co-terraform-provider-oci'

new dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSchConnectorPluginsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSchConnectorPlugins.DataOciSchConnectorPluginsFilter">DataOciSchConnectorPluginsFilter</a>

---



