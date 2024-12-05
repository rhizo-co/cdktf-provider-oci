# `dataOciCloudGuardDataSources` Submodule <a name="`dataOciCloudGuardDataSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataSources <a name="DataOciCloudGuardDataSources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources oci_cloud_guard_data_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSources(scope: Construct, id: string, config: DataOciCloudGuardDataSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig">DataOciCloudGuardDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig">DataOciCloudGuardDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDataSourceFeedProvider">resetDataSourceFeedProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetLoggingQueryType">resetLoggingQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudGuardDataSourcesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDataSourceFeedProvider` <a name="resetDataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDataSourceFeedProvider"></a>

```typescript
public resetDataSourceFeedProvider(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingQueryType` <a name="resetLoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetLoggingQueryType"></a>

```typescript
public resetLoggingQueryType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceCollection">dataSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList">DataOciCloudGuardDataSourcesDataSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList">DataOciCloudGuardDataSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProviderInput">dataSourceFeedProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryTypeInput">loggingQueryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataSourceCollection`<sup>Required</sup> <a name="dataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceCollection"></a>

```typescript
public readonly dataSourceCollection: DataOciCloudGuardDataSourcesDataSourceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList">DataOciCloudGuardDataSourcesDataSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filter"></a>

```typescript
public readonly filter: DataOciCloudGuardDataSourcesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList">DataOciCloudGuardDataSourcesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataSourceFeedProviderInput`<sup>Optional</sup> <a name="dataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProviderInput"></a>

```typescript
public readonly dataSourceFeedProviderInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudGuardDataSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingQueryTypeInput`<sup>Optional</sup> <a name="loggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryTypeInput"></a>

```typescript
public readonly loggingQueryTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataSourcesConfig <a name="DataOciCloudGuardDataSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesConfig: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}.

---

##### `dataSourceFeedProvider`<sup>Optional</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudGuardDataSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#filter DataOciCloudGuardDataSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQueryType`<sup>Optional</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}.

---

### DataOciCloudGuardDataSourcesDataSourceCollection <a name="DataOciCloudGuardDataSourcesDataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollection: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItems <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItems: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo = { ... }
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail = { ... }
```


### DataOciCloudGuardDataSourcesFilter <a name="DataOciCloudGuardDataSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataSourcesFilter: dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#name DataOciCloudGuardDataSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#values DataOciCloudGuardDataSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#regex DataOciCloudGuardDataSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#name DataOciCloudGuardDataSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#values DataOciCloudGuardDataSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#regex DataOciCloudGuardDataSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyEntitiesCount`<sup>Required</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount"></a>

```typescript
public readonly keyEntitiesCount: number;
```

- *Type:* number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalEntitiesCount`<sup>Required</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.additionalEntitiesCount"></a>

```typescript
public readonly additionalEntitiesCount: number;
```

- *Type:* number

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `loggingQueryDetails`<sup>Required</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryDetails"></a>

```typescript
public readonly loggingQueryDetails: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList</a>

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryType"></a>

```typescript
public readonly loggingQueryType: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `scheduledQueryScopeDetails`<sup>Required</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails"></a>

```typescript
public readonly scheduledQueryScopeDetails: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime">queryStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType">startPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime"></a>

```typescript
public readonly queryStartTime: string;
```

- *Type:* string

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType"></a>

```typescript
public readonly startPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId"></a>

```typescript
public readonly detectorRecipeId: string;
```

- *Type:* string

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId"></a>

```typescript
public readonly detectorRuleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetectorMappingInfo">dataSourceDetectorMappingInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.regionStatusDetail">regionStatusDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems">DataOciCloudGuardDataSourcesDataSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList</a>

---

##### `dataSourceDetectorMappingInfo`<sup>Required</sup> <a name="dataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetectorMappingInfo"></a>

```typescript
public readonly dataSourceDetectorMappingInfo: DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList</a>

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceFeedProvider"></a>

```typescript
public readonly dataSourceFeedProvider: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionStatusDetail`<sup>Required</sup> <a name="regionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.regionStatusDetail"></a>

```typescript
public readonly regionStatusDetail: DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems">DataOciCloudGuardDataSourcesDataSourceCollectionItems</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection">DataOciCloudGuardDataSourcesDataSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudGuardDataSourcesDataSourceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataSourcesDataSourceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection">DataOciCloudGuardDataSourcesDataSourceCollection</a>

---


### DataOciCloudGuardDataSourcesFilterList <a name="DataOciCloudGuardDataSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardDataSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>[]

---


### DataOciCloudGuardDataSourcesFilterOutputReference <a name="DataOciCloudGuardDataSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataSources } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardDataSourcesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>

---



