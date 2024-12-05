# `dataOciOpsiAwrHubSources` Submodule <a name="`dataOciOpsiAwrHubSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubSources <a name="DataOciOpsiAwrHubSources" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources oci_opsi_awr_hub_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources(scope: Construct, id: string, config: DataOciOpsiAwrHubSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig">DataOciOpsiAwrHubSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig">DataOciOpsiAwrHubSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetAwrHubSourceId">resetAwrHubSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiAwrHubSourcesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]

---

##### `resetAwrHubSourceId` <a name="resetAwrHubSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetAwrHubSourceId"></a>

```typescript
public resetAwrHubSourceId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSourceType` <a name="resetSourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isConstruct"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformElement"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiAwrHubSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiAwrHubSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubSourceSummaryCollection">awrHubSourceSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList">DataOciOpsiAwrHubSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubIdInput">awrHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubSourceIdInput">awrHubSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.statusInput">statusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubSourceId">awrHubSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.sourceType">sourceType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.state">state</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.status">status</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awrHubSourceSummaryCollection`<sup>Required</sup> <a name="awrHubSourceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubSourceSummaryCollection"></a>

```typescript
public readonly awrHubSourceSummaryCollection: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiAwrHubSourcesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList">DataOciOpsiAwrHubSourcesFilterList</a>

---

##### `awrHubIdInput`<sup>Optional</sup> <a name="awrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubIdInput"></a>

```typescript
public readonly awrHubIdInput: string;
```

- *Type:* string

---

##### `awrHubSourceIdInput`<sup>Optional</sup> <a name="awrHubSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubSourceIdInput"></a>

```typescript
public readonly awrHubSourceIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiAwrHubSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.statusInput"></a>

```typescript
public readonly statusInput: string[];
```

- *Type:* string[]

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `awrHubSourceId`<sup>Required</sup> <a name="awrHubSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.awrHubSourceId"></a>

```typescript
public readonly awrHubSourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.sourceType"></a>

```typescript
public readonly sourceType: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection <a name="DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection: dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection = { ... }
```


### DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems <a name="DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems: dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems = { ... }
```


### DataOciOpsiAwrHubSourcesConfig <a name="DataOciOpsiAwrHubSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubSourcesConfig: dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.awrHubId">awrHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#awr_hub_id DataOciOpsiAwrHubSources#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.awrHubSourceId">awrHubSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#awr_hub_source_id DataOciOpsiAwrHubSources#awr_hub_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#compartment_id DataOciOpsiAwrHubSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#id DataOciOpsiAwrHubSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#name DataOciOpsiAwrHubSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.sourceType">sourceType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#source_type DataOciOpsiAwrHubSources#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#state DataOciOpsiAwrHubSources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.status">status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#status DataOciOpsiAwrHubSources#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#awr_hub_id DataOciOpsiAwrHubSources#awr_hub_id}.

---

##### `awrHubSourceId`<sup>Optional</sup> <a name="awrHubSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.awrHubSourceId"></a>

```typescript
public readonly awrHubSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#awr_hub_source_id DataOciOpsiAwrHubSources#awr_hub_source_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#compartment_id DataOciOpsiAwrHubSources#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiAwrHubSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#filter DataOciOpsiAwrHubSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#id DataOciOpsiAwrHubSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#name DataOciOpsiAwrHubSources#name}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#source_type DataOciOpsiAwrHubSources#source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#state DataOciOpsiAwrHubSources#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesConfig.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#status DataOciOpsiAwrHubSources#status}.

---

### DataOciOpsiAwrHubSourcesFilter <a name="DataOciOpsiAwrHubSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubSourcesFilter: dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#name DataOciOpsiAwrHubSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#values DataOciOpsiAwrHubSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#regex DataOciOpsiAwrHubSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#name DataOciOpsiAwrHubSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#values DataOciOpsiAwrHubSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_sources#regex DataOciOpsiAwrHubSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList <a name="DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference <a name="DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.associatedOpsiId">associatedOpsiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.associatedResourceId">associatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.awrHubOpsiSourceId">awrHubOpsiSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.awrSourceDatabaseId">awrSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.hoursSinceLastImport">hoursSinceLastImport</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.isRegisteredWithAwrHub">isRegisteredWithAwrHub</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.maxSnapshotIdentifier">maxSnapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.minSnapshotIdentifier">minSnapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.sourceMailBoxUrl">sourceMailBoxUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeFirstSnapshotGenerated">timeFirstSnapshotGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeLastSnapshotGenerated">timeLastSnapshotGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associatedOpsiId`<sup>Required</sup> <a name="associatedOpsiId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.associatedOpsiId"></a>

```typescript
public readonly associatedOpsiId: string;
```

- *Type:* string

---

##### `associatedResourceId`<sup>Required</sup> <a name="associatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.associatedResourceId"></a>

```typescript
public readonly associatedResourceId: string;
```

- *Type:* string

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `awrHubOpsiSourceId`<sup>Required</sup> <a name="awrHubOpsiSourceId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.awrHubOpsiSourceId"></a>

```typescript
public readonly awrHubOpsiSourceId: string;
```

- *Type:* string

---

##### `awrSourceDatabaseId`<sup>Required</sup> <a name="awrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.awrSourceDatabaseId"></a>

```typescript
public readonly awrSourceDatabaseId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hoursSinceLastImport`<sup>Required</sup> <a name="hoursSinceLastImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.hoursSinceLastImport"></a>

```typescript
public readonly hoursSinceLastImport: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRegisteredWithAwrHub`<sup>Required</sup> <a name="isRegisteredWithAwrHub" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.isRegisteredWithAwrHub"></a>

```typescript
public readonly isRegisteredWithAwrHub: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxSnapshotIdentifier`<sup>Required</sup> <a name="maxSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.maxSnapshotIdentifier"></a>

```typescript
public readonly maxSnapshotIdentifier: number;
```

- *Type:* number

---

##### `minSnapshotIdentifier`<sup>Required</sup> <a name="minSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.minSnapshotIdentifier"></a>

```typescript
public readonly minSnapshotIdentifier: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceMailBoxUrl`<sup>Required</sup> <a name="sourceMailBoxUrl" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.sourceMailBoxUrl"></a>

```typescript
public readonly sourceMailBoxUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFirstSnapshotGenerated`<sup>Required</sup> <a name="timeFirstSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeFirstSnapshotGenerated"></a>

```typescript
public readonly timeFirstSnapshotGenerated: string;
```

- *Type:* string

---

##### `timeLastSnapshotGenerated`<sup>Required</sup> <a name="timeLastSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeLastSnapshotGenerated"></a>

```typescript
public readonly timeLastSnapshotGenerated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems</a>

---


### DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList <a name="DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference <a name="DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection">DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection</a>

---


### DataOciOpsiAwrHubSourcesFilterList <a name="DataOciOpsiAwrHubSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiAwrHubSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>[]

---


### DataOciOpsiAwrHubSourcesFilterOutputReference <a name="DataOciOpsiAwrHubSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiAwrHubSourcesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubSources.DataOciOpsiAwrHubSourcesFilter">DataOciOpsiAwrHubSourcesFilter</a>

---



