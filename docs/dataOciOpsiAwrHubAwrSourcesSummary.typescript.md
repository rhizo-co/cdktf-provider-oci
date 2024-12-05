# `dataOciOpsiAwrHubAwrSourcesSummary` Submodule <a name="`dataOciOpsiAwrHubAwrSourcesSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSourcesSummary <a name="DataOciOpsiAwrHubAwrSourcesSummary" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary oci_opsi_awr_hub_awr_sources_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary(scope: Construct, id: string, config: DataOciOpsiAwrHubAwrSourcesSummaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig">DataOciOpsiAwrHubAwrSourcesSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig">DataOciOpsiAwrHubAwrSourcesSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSourcesSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiAwrHubAwrSourcesSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSourcesSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList">DataOciOpsiAwrHubAwrSourcesSummaryItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubIdInput">awrHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.items"></a>

```typescript
public readonly items: DataOciOpsiAwrHubAwrSourcesSummaryItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList">DataOciOpsiAwrHubAwrSourcesSummaryItemsList</a>

---

##### `awrHubIdInput`<sup>Optional</sup> <a name="awrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubIdInput"></a>

```typescript
public readonly awrHubIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSourcesSummaryConfig <a name="DataOciOpsiAwrHubAwrSourcesSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSourcesSummaryConfig: dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.awrHubId">awrHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}.

---

### DataOciOpsiAwrHubAwrSourcesSummaryItems <a name="DataOciOpsiAwrHubAwrSourcesSummaryItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiAwrHubAwrSourcesSummaryItems: dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSourcesSummaryItemsList <a name="DataOciOpsiAwrHubAwrSourcesSummaryItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference <a name="DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiAwrHubAwrSourcesSummary } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrHubId">awrHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrSourceDatabaseId">awrSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.hoursSinceLastImport">hoursSinceLastImport</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.maxSnapshotIdentifier">maxSnapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.minSnapshotIdentifier">minSnapshotIdentifier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.snapshotsUploaded">snapshotsUploaded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeFirstSnapshotGenerated">timeFirstSnapshotGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeLastSnapshotGenerated">timeLastSnapshotGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems">DataOciOpsiAwrHubAwrSourcesSummaryItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrHubId"></a>

```typescript
public readonly awrHubId: string;
```

- *Type:* string

---

##### `awrSourceDatabaseId`<sup>Required</sup> <a name="awrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.awrSourceDatabaseId"></a>

```typescript
public readonly awrSourceDatabaseId: string;
```

- *Type:* string

---

##### `hoursSinceLastImport`<sup>Required</sup> <a name="hoursSinceLastImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.hoursSinceLastImport"></a>

```typescript
public readonly hoursSinceLastImport: number;
```

- *Type:* number

---

##### `maxSnapshotIdentifier`<sup>Required</sup> <a name="maxSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.maxSnapshotIdentifier"></a>

```typescript
public readonly maxSnapshotIdentifier: number;
```

- *Type:* number

---

##### `minSnapshotIdentifier`<sup>Required</sup> <a name="minSnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.minSnapshotIdentifier"></a>

```typescript
public readonly minSnapshotIdentifier: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snapshotsUploaded`<sup>Required</sup> <a name="snapshotsUploaded" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.snapshotsUploaded"></a>

```typescript
public readonly snapshotsUploaded: number;
```

- *Type:* number

---

##### `timeFirstSnapshotGenerated`<sup>Required</sup> <a name="timeFirstSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeFirstSnapshotGenerated"></a>

```typescript
public readonly timeFirstSnapshotGenerated: string;
```

- *Type:* string

---

##### `timeLastSnapshotGenerated`<sup>Required</sup> <a name="timeLastSnapshotGenerated" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.timeLastSnapshotGenerated"></a>

```typescript
public readonly timeLastSnapshotGenerated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiAwrHubAwrSourcesSummaryItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSourcesSummary.DataOciOpsiAwrHubAwrSourcesSummaryItems">DataOciOpsiAwrHubAwrSourcesSummaryItems</a>

---



