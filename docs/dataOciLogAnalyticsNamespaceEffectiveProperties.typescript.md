# `dataOciLogAnalyticsNamespaceEffectiveProperties` Submodule <a name="`dataOciLogAnalyticsNamespaceEffectiveProperties` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceEffectiveProperties <a name="DataOciLogAnalyticsNamespaceEffectiveProperties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties oci_log_analytics_namespace_effective_properties}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceEffectivePropertiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig">DataOciLogAnalyticsNamespaceEffectivePropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig">DataOciLogAnalyticsNamespaceEffectivePropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetEntityId">resetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetIsIncludePatterns">resetIsIncludePatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetPatternId">resetPatternId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLogAnalyticsNamespaceEffectivePropertiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]

---

##### `resetAgentId` <a name="resetAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetAgentId"></a>

```typescript
public resetAgentId(): void
```

##### `resetEntityId` <a name="resetEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetEntityId"></a>

```typescript
public resetEntityId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsIncludePatterns` <a name="resetIsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetIsIncludePatterns"></a>

```typescript
public resetIsIncludePatterns(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPatternId` <a name="resetPatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetPatternId"></a>

```typescript
public resetPatternId(): void
```

##### `resetSourceName` <a name="resetSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetSourceName"></a>

```typescript
public resetSourceName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceEffectiveProperties resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceEffectiveProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceEffectiveProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceEffectiveProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceEffectiveProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.effectivePropertyCollection">effectivePropertyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList">DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatternsInput">isIncludePatternsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternIdInput">patternIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatterns">isIncludePatterns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternId">patternId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `effectivePropertyCollection`<sup>Required</sup> <a name="effectivePropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.effectivePropertyCollection"></a>

```typescript
public readonly effectivePropertyCollection: DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filter"></a>

```typescript
public readonly filter: DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList">DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLogAnalyticsNamespaceEffectivePropertiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isIncludePatternsInput`<sup>Optional</sup> <a name="isIncludePatternsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatternsInput"></a>

```typescript
public readonly isIncludePatternsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `patternIdInput`<sup>Optional</sup> <a name="patternIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternIdInput"></a>

```typescript
public readonly patternIdInput: number;
```

- *Type:* number

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIncludePatterns`<sup>Required</sup> <a name="isIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatterns"></a>

```typescript
public readonly isIncludePatterns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `patternId`<sup>Required</sup> <a name="patternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternId"></a>

```typescript
public readonly patternId: number;
```

- *Type:* number

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceEffectivePropertiesConfig <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceEffectivePropertiesConfig: dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#namespace DataOciLogAnalyticsNamespaceEffectiveProperties#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#agent_id DataOciLogAnalyticsNamespaceEffectiveProperties#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#entity_id DataOciLogAnalyticsNamespaceEffectiveProperties#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#id DataOciLogAnalyticsNamespaceEffectiveProperties#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.isIncludePatterns">isIncludePatterns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#is_include_patterns DataOciLogAnalyticsNamespaceEffectiveProperties#is_include_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.patternId">patternId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#pattern_id DataOciLogAnalyticsNamespaceEffectiveProperties#pattern_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.sourceName">sourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#source_name DataOciLogAnalyticsNamespaceEffectiveProperties#source_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#namespace DataOciLogAnalyticsNamespaceEffectiveProperties#namespace}.

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#agent_id DataOciLogAnalyticsNamespaceEffectiveProperties#agent_id}.

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#entity_id DataOciLogAnalyticsNamespaceEffectiveProperties#entity_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLogAnalyticsNamespaceEffectivePropertiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#filter DataOciLogAnalyticsNamespaceEffectiveProperties#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#id DataOciLogAnalyticsNamespaceEffectiveProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIncludePatterns`<sup>Optional</sup> <a name="isIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.isIncludePatterns"></a>

```typescript
public readonly isIncludePatterns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#is_include_patterns DataOciLogAnalyticsNamespaceEffectiveProperties#is_include_patterns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}.

---

##### `patternId`<sup>Optional</sup> <a name="patternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.patternId"></a>

```typescript
public readonly patternId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#pattern_id DataOciLogAnalyticsNamespaceEffectiveProperties#pattern_id}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#source_name DataOciLogAnalyticsNamespaceEffectiveProperties#source_name}.

---

### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection: dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection = { ... }
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems: dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems = { ... }
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns: dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns = { ... }
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilter <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceEffectivePropertiesFilter: dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#values DataOciLogAnalyticsNamespaceEffectiveProperties#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#regex DataOciLogAnalyticsNamespaceEffectiveProperties#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#values DataOciLogAnalyticsNamespaceEffectiveProperties#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#regex DataOciLogAnalyticsNamespaceEffectiveProperties#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.effectiveLevel">effectiveLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.patterns">patterns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLevel`<sup>Required</sup> <a name="effectiveLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.effectiveLevel"></a>

```typescript
public readonly effectiveLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.patterns"></a>

```typescript
public readonly patterns: DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList</a>

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.effectiveLevel">effectiveLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLevel`<sup>Required</sup> <a name="effectiveLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.effectiveLevel"></a>

```typescript
public readonly effectiveLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsNamespaceEffectivePropertiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>[]

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceEffectiveProperties } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsNamespaceEffectivePropertiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter">DataOciLogAnalyticsNamespaceEffectivePropertiesFilter</a>

---



