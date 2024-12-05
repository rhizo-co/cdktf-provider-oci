# `dataOciOpsiDatabaseInsights` Submodule <a name="`dataOciOpsiDatabaseInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiDatabaseInsights <a name="DataOciOpsiDatabaseInsights" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights oci_opsi_database_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights(scope: Construct, id: string, config?: DataOciOpsiDatabaseInsightsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig">DataOciOpsiDatabaseInsightsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig">DataOciOpsiDatabaseInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetEnterpriseManagerBridgeId">resetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetExadataInsightId">resetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOpsiPrivateEndpointId">resetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiDatabaseInsightsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDatabaseType` <a name="resetDatabaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseType"></a>

```typescript
public resetDatabaseType(): void
```

##### `resetEnterpriseManagerBridgeId` <a name="resetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetEnterpriseManagerBridgeId"></a>

```typescript
public resetEnterpriseManagerBridgeId(): void
```

##### `resetExadataInsightId` <a name="resetExadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetExadataInsightId"></a>

```typescript
public resetExadataInsightId(): void
```

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpsiPrivateEndpointId` <a name="resetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOpsiPrivateEndpointId"></a>

```typescript
public resetOpsiPrivateEndpointId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiDatabaseInsights resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiDatabaseInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiDatabaseInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiDatabaseInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiDatabaseInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseInsightsCollection">databaseInsightsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList">DataOciOpsiDatabaseInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseIdInput">databaseIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeIdInput">enterpriseManagerBridgeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightIdInput">exadataInsightIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointIdInput">opsiPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.statusInput">statusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseId">databaseId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseType">databaseType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightId">exadataInsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.state">state</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.status">status</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseInsightsCollection`<sup>Required</sup> <a name="databaseInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseInsightsCollection"></a>

```typescript
public readonly databaseInsightsCollection: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiDatabaseInsightsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList">DataOciOpsiDatabaseInsightsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string[];
```

- *Type:* string[]

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string[];
```

- *Type:* string[]

---

##### `enterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="enterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeIdInput"></a>

```typescript
public readonly enterpriseManagerBridgeIdInput: string;
```

- *Type:* string

---

##### `exadataInsightIdInput`<sup>Optional</sup> <a name="exadataInsightIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightIdInput"></a>

```typescript
public readonly exadataInsightIdInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiDatabaseInsightsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="opsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointIdInput"></a>

```typescript
public readonly opsiPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.statusInput"></a>

```typescript
public readonly statusInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseId"></a>

```typescript
public readonly databaseId: string[];
```

- *Type:* string[]

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseType"></a>

```typescript
public readonly databaseType: string[];
```

- *Type:* string[]

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

---

##### `exadataInsightId`<sup>Required</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightId"></a>

```typescript
public readonly exadataInsightId: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiDatabaseInsightsConfig <a name="DataOciOpsiDatabaseInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsConfig: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseId">databaseId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseType">databaseType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.exadataInsightId">exadataInsightId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.status">status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}.

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseType"></a>

```typescript
public readonly databaseType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}.

---

##### `exadataInsightId`<sup>Optional</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.exadataInsightId"></a>

```typescript
public readonly exadataInsightId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiDatabaseInsightsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#filter DataOciOpsiDatabaseInsights#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}.

---

### DataOciOpsiDatabaseInsightsDatabaseInsightsCollection <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsDatabaseInsightsCollection: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection = { ... }
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems = { ... }
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails = { ... }
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails = { ... }
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts = { ... }
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails = { ... }
```


### DataOciOpsiDatabaseInsightsFilter <a name="DataOciOpsiDatabaseInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiDatabaseInsightsFilter: dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#name DataOciOpsiDatabaseInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#values DataOciOpsiDatabaseInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#regex DataOciOpsiDatabaseInsights#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#name DataOciOpsiDatabaseInsights#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#values DataOciOpsiDatabaseInsights#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#regex DataOciOpsiDatabaseInsights#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.hostIp">hostIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostIp`<sup>Required</sup> <a name="hostIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```typescript
public readonly hostIp: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hosts"></a>

```typescript
public readonly hosts: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialSourceName">credentialSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSourceName`<sup>Required</sup> <a name="credentialSourceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```typescript
public readonly credentialSourceName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionCredentialDetails">connectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionDetails">connectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.credentialDetails">credentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseConnectionStatusDetails">databaseConnectionStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseDisplayName">databaseDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseResourceType">databaseResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.dbmPrivateEndpointId">dbmPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName">enterpriseManagerEntityDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityName">enterpriseManagerEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityType">enterpriseManagerEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.entitySource">entitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.exadataInsightId">exadataInsightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isAdvancedFeaturesEnabled">isAdvancedFeaturesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.processorCount">processorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.rootId">rootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionCredentialDetails`<sup>Required</sup> <a name="connectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionCredentialDetails"></a>

```typescript
public readonly connectionCredentialDetails: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList</a>

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `credentialDetails`<sup>Required</sup> <a name="credentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.credentialDetails"></a>

```typescript
public readonly credentialDetails: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList</a>

---

##### `databaseConnectionStatusDetails`<sup>Required</sup> <a name="databaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseConnectionStatusDetails"></a>

```typescript
public readonly databaseConnectionStatusDetails: string;
```

- *Type:* string

---

##### `databaseDisplayName`<sup>Required</sup> <a name="databaseDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseDisplayName"></a>

```typescript
public readonly databaseDisplayName: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseResourceType`<sup>Required</sup> <a name="databaseResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseResourceType"></a>

```typescript
public readonly databaseResourceType: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `dbmPrivateEndpointId`<sup>Required</sup> <a name="dbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.dbmPrivateEndpointId"></a>

```typescript
public readonly dbmPrivateEndpointId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerBridgeId"></a>

```typescript
public readonly enterpriseManagerBridgeId: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="enterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName"></a>

```typescript
public readonly enterpriseManagerEntityDisplayName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier"></a>

```typescript
public readonly enterpriseManagerEntityIdentifier: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityName`<sup>Required</sup> <a name="enterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityName"></a>

```typescript
public readonly enterpriseManagerEntityName: string;
```

- *Type:* string

---

##### `enterpriseManagerEntityType`<sup>Required</sup> <a name="enterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityType"></a>

```typescript
public readonly enterpriseManagerEntityType: string;
```

- *Type:* string

---

##### `enterpriseManagerIdentifier`<sup>Required</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerIdentifier"></a>

```typescript
public readonly enterpriseManagerIdentifier: string;
```

- *Type:* string

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.entitySource"></a>

```typescript
public readonly entitySource: string;
```

- *Type:* string

---

##### `exadataInsightId`<sup>Required</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.exadataInsightId"></a>

```typescript
public readonly exadataInsightId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAdvancedFeaturesEnabled`<sup>Required</sup> <a name="isAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isAdvancedFeaturesEnabled"></a>

```typescript
public readonly isAdvancedFeaturesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `processorCount`<sup>Required</sup> <a name="processorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.processorCount"></a>

```typescript
public readonly processorCount: number;
```

- *Type:* number

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection">DataOciOpsiDatabaseInsightsDatabaseInsightsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiDatabaseInsightsDatabaseInsightsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection">DataOciOpsiDatabaseInsightsDatabaseInsightsCollection</a>

---


### DataOciOpsiDatabaseInsightsFilterList <a name="DataOciOpsiDatabaseInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiDatabaseInsightsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiDatabaseInsightsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>[]

---


### DataOciOpsiDatabaseInsightsFilterOutputReference <a name="DataOciOpsiDatabaseInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiDatabaseInsights } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiDatabaseInsightsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>

---



